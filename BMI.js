const containerExercise = document.querySelector(".containerExercise");

const weightGain = [
  (trips = {
    name: "Tricps Dips",
    link: "triceps_dips.html",
    image: "sqauts_icon.webp",
  }),
  (pushUp = {
    name: "Push Up",
    link: "push_up.html",
    image: "squats_img1.jpg",
  }),
  (squat = {
    name: "Squat",
    link: "squat.html",
    image: "sqauts_img3.webp",
  }),
  (RR = {
    name: "Bench Dip",
    link: "ravindra.html",
    image: "BenchDips_1.jpg",
  }),
];

const weightLoss = [
  (trips = {
    name: "Running",
    link: "triceps_dips.html",
    image: "Running_icon.webp",
  }),
  (pushUp = {
    name: "Cycling",
    link: "push_up.html",
    image: "cyclic_icon.webp",
  }),
  (squat = {
    name: "Swiming",
    link: "squat.html",
    image: "sqauts_img3.webp",
  }),
  (RR = {
    name: "Yoga",
    link: "ravindra.html",
    image: "yoga_icon.jpg",
  }),
];

const Healthy = [
  (trips = {
    name: "Triceps Dips",
    link: "triceps_dips.html",
    image: "sqauts_img4.webp",
  }),
  (pushUp = {
    name: "Push up",
    link: "push_up.html",
    image: "sqauts_icon.webp",
  }),
  (squat = {
    name: "Swimming",
    link: "swimming.html",
    image: "Swimming_icon.jpg",
  }),
  (RR = {
    name: "Running",
    link: "running.html",
    image: "Running_icon.webp",
  }),
];

// const weightLoss = ["Walking", "Cycling", "Swiming", "Yoga", "Bench press"];
// const fitEx = ["RR", "AK", "AY", "AK2"];

// const exercise = [weightGain, weightLoss, fitEx];

const displayExercise = function (exercises) {
  containerExercise.innerHTML = "";
  exercises.forEach((ex) => {
    const html = ` <div class="exItem">
    <div class="exlabel">
      <div class="icon">
        <img src="${ex.image}" alt="" />
      </div>
      <div class="link">
        <a href="${ex.link}"><h1>${ex.name}</h1></a>
      </div>
    </div>
  </div>`;

    containerExercise.insertAdjacentHTML("afterbegin", html);
  });
};

let height = document.getElementById("height"); // here we access all the elements that we describe in html file like :- height, width, submit
let weight = document.getElementById("weight");
let submit = document.getElementById("submit");

const output = document.getElementById("output");

// console.log(height.value)
// console.log(weight.value)

// this is arrow function used when we click on the submit button
const process = () => {
  let hv = height.value / 100;
  let wv = weight.value;

  if (hv === "" || wv === "" || hv === 0 || wv === 0) {
    output.textContent = "Please fill input in right manner";
  } else {
    let bmi = wv / (hv * hv);
    let bmiupdate = bmi.toFixed(2);

    // this is condition used here  to compare all the bmi index

    let addtext = " ";
    if (bmiupdate > 30) {
      addtext = " You under the category of obesity";
      output;
    } else if (bmiupdate > 25 && bmiupdate < 29.9) {
      addtext = " You under the category of overweight";
      displayExercise(weightLoss);
    } else if (bmiupdate > 18.5 && bmiupdate < 24.9) {
      addtext = " You under the category of Healthy Weight";
      displayExercise(Healthy);
    } else {
      addtext = " You under the category of UnderWeight";
      displayExercise(weightGain);
      output.textContent = "BMI: " + bmiupdate + ". " + addtext;
    }

    // this is used to show output
    output.textContent = "BMI: " + bmi.toFixed(2) + "," + addtext; // Display BMI value with 2 decimal places
  }
};

// this is used for the invoke function call here

//
// const recommandEx = document.querySelector(".containerExercise");

submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  process(); // Call the process function
  containerExercise.style.opacity = 1;
});
