async function myFun () {
    const response = await fetch('https://random.dog/woof.json')
    .then((response) => response.json())
    .then(data => demo.src = data.url);
    document.getElementById('demo').src = response;

    if (response.match(".mp4") || response.match(".webm")) {
      myFun()
    }
}