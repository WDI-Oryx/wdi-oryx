// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

window.onload = async () => {
  const button = document.querySelector("#start");
  if (button) {
    button.addEventListener("click", async function() {
      const recorder = await recordAudio();
      recorder.start();
      const stopButton = document.querySelector("#stop");
      stopButton.addEventListener("click", async function() {
        const audio = await recorder.stop();
        const formData = new FormData();
        formData.append("file", audio.audioBlob);
        fetch("/audios", {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        })
          .then(r => r.json())
          .then(data => {
            const output = document.querySelector("#output");
            output.innerHTML = `<h2>Success!</h2>`;
          });
        audio.play();
      });
    });
  }

  const buttons = document.querySelectorAll(".audio button");
  for (let button of buttons) {
    button.addEventListener("click", e => {
      const parent = e.target.parentNode;
      const audio = parent.querySelector("audio");
      audio.play();
    });
  }
};
