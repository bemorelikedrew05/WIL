function calculateTotal() {
    const courseSelection = document.getElementById('course-selection');
    const totalAmount = document.getElementById('total-amount');
    const discountField = document.getElementById('discount');
    const finalAmount = document.getElementById('final-amount');

    let selectedCourses = Array.from(courseSelection.selectedOptions);
    let total = 0;

    selectedCourses.forEach(option => {
        total += parseInt(option.value);
    });


    let discount = 0;
    if (selectedCourses.length === 2) {
        discount = 5;
    } else if (selectedCourses.length === 3) {
        discount = 10;
    } else if (selectedCourses.length >= 4) {
        discount = 15;
    }

    let discountAmount = (discount / 100) * total;
    let finalTotal = total - discountAmount;

    totalAmount.value = `R${total}`;
    discountField.value = `${discount}%`;
    finalAmount.value = `R${finalTotal.toFixed(2)}`;
}

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Proceeding to payment with the selected courses.');
});
