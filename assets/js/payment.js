function paythebill(){

    var fname=localStorage.getItem("firstname");
    var lname=localStorage.getItem("lastname");
    var emailId=localStorage.getItem("email");
    var phoneNo=localStorage.getItem("mobno");
    var fullname=fname+" "+lname;
    var options = {
        "key": "rzp_test_spE082qFRk847v", // Enter the Key ID generated from the Dashboard
        "amount": 1*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "FlyAir",
        "description": "Flight Booking!",
        "id": "OID-"+Math.floor(Math.random() * 100) + 1,
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {

            "name": fullname,
            "email": emailId,
            "contact": "91"+phoneNo
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.id);
            alert(response.error.metadata.payment_id);
    });

    rzp1.on('payment.success', function (response){
            alert("Payment Done!");
    });
    rzp1.open();

}
