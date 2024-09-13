const degree = document.getElementById('degree');
const fullMark = document.getElementById('fullMark');
const percentage = document.getElementById('percentage');

function calculate() {
    const degreeValue = parseFloat(degree.value);
    const fullMarkValue = parseFloat(fullMark.value);

    if (isNaN(degreeValue) || isNaN(fullMarkValue)) {
        percentage.value = 'Please enter valid numbers';
        return;
    }

    if (degreeValue === 0 && fullMarkValue === 0) {
        percentage.value = 'Write Degree and Full Mark to calculate percentage.';
    } else if (fullMarkValue === 0) {
        percentage.value = 'Full mark must be greater than zero';
    } else if (degreeValue > fullMarkValue) {
        percentage.value = 'Degree should be less than or equal to the full mark';
    } else {
        percentage.value = ((degreeValue / fullMarkValue) * 100).toFixed(2) + '%';
    }
}