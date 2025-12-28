const quizForm = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');
const planList = document.getElementById('planList');

quizForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const frequency = parseInt(document.getElementById('frequency').value);
  const impact = parseInt(document.getElementById('impact').value);

  const score = frequency + impact;

  planList.innerHTML = '';

  let plan = [];

  if(score <= 3) {
    resultDiv.textContent = "Low risk. Maintain healthy habits!";
    plan = [
      "Keep a daily journal of your routine.",
      "Practice mindfulness and meditation 10 mins daily.",
      "Set clear boundaries and avoid triggers."
    ];
  } else if(score <= 6) {
    resultDiv.textContent = "Moderate risk. Follow this plan:";
    plan = [
      "Track your triggers and avoid them.",
      "Replace habit with productive activity.",
      "Daily meditation and deep breathing exercises.",
      "Set weekly goals and reward progress."
    ];
  } else {
    resultDiv.textContent = "High risk. Strong guidance needed!";
    plan = [
      "Seek professional counseling if needed.",
      "Start a strict daily routine with exercise.",
      "Avoid all triggers and distractions.",
      "Meditate 15-20 mins daily.",
      "Join support community anonymously."
    ];
  }

  plan.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    planList.appendChild(li);
  });
});
