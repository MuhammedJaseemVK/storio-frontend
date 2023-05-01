import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

function Payment() {
    const router = useRouter();
    const [products, setproducts] = useState([])
    const [total, settotal] = useState(0)

    useEffect(() => {
        console.log([router.query.ids])
        try {
            const fetchAndSetBill = async () => {
                let username = localStorage.getItem('username')
                let profile = await fetchBill()
                console.log(profile?.data.products)
                setproducts(profile?.data.products)
                settotal(profile?.data.total)
            }
            fetchAndSetBill()
        } catch (error) {
            console.log(error)
            alert("Error!")
        }
    }, [])

    const fetchBill = () => {

        return axios.post(`https://storio.virtualdom.tech/payment/fetchBill`, {
            products: [router.query.ids]
        })
    };

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order

        const result = await axios.post(`https://storio.virtualdom.tech/payment/orders?total=${total}`)
        console.log(result)
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_qtJBBoog39ipNo", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Storio",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderId: order_id,
                    customerId: localStorage.getItem('username'),
                    orderTotal: Number(amount),
                    items: products.map(p => ({
                        name: p.name,
                        productId: p._id,
                        quantity: 1,
                        price: p.price,
                    })),
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };
                console.log('hi')
                router.push('/profile')
                const result = await axios.post("http:localhost:3000/payment/success", data);

                console.log(result.data);
            },
            prefill: {
                name: localStorage.getItem('username'),
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div className="App bg-black min h-screen ">
            <h2 className="text-[#ff9900] font-bold text-3xl px-5 p-5 ">Checkout </h2>
            <div className="flex flex-col gap-1 mt-6">
                {
                    products?.map(p => {
                        return (
                            <div className='rounded-lg  p-2 bg-gray-600 text-white'>
                                <div className='flex items-center'>
                                    <div className='w-20 h-20'>
                                        <img src={p.image} />
                                    </div>
                                    <div className='p-3'>
                                        <div className=''>
                                            {p.name}
                                        </div>
                                        <div className=''>
                                            {p.brand}
                                        </div>
                                        <div className=''>
                                            {p.description}
                                        </div>
                                        <div className='font-bold text-xl'>
                                            {p.price}
                                        </div>
                                    </div>
                                    <div className="flex flex-1 justify-right  text-right">
                                        <p className="text-right">Quantity:1</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-center absolute bottom-24">
                <button className="App-link rounded-lg px-20 py-3 bg-[#ff9900]" onClick={displayRazorpay}>
                    Pay {total}
                </button>
            </div>
        </div>
    );
}

export default Payment;