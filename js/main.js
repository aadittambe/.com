// TypeIt animation code 

new TypeIt('#simpleUsage', {
    strings: 'Aadit Tambe',
    speed: 300,
    waitUntilVisible: true
}).go();

// End TypeIt


// jQuery for selecting story type

$("#link-reporting").click(function () {
    $("#text").click()
});

$("#link-graphics").click(function () {
    $("#graphics").click()
});

$("#graphics").click(function () {
    $(".app").hide()
    $(".data").hide()
    $(".text").hide()
    $(".graphics").show()
    $(".btn.reset span").css("background-color", "#f6f4e6")
});

$("#data").click(function () {
    $(".app").hide()
    $(".graphics").hide()
    $(".text").hide()
    $(".data").show()
    $(".btn.reset span").css("background-color", "#f6f4e6")
});

$("#text").click(function () {
    $(".app").hide()
    $(".graphics").hide()
    $(".data").hide()
    $(".text").show()
    $(".btn.reset span").css("background-color", "#f6f4e6")
});

$("#app").click(function () {
    $(".text").hide()
    $(".graphics").hide()
    $(".data").hide()
    $(".app").show()
    $(".btn.reset span").css("background-color", "#f6f4e6")
});

$("#reset").click(function () {
    $(".text").show()
    $(".graphics").show()
    $(".data").show()
    $(".app").show()
    $(".btn.reset span").css("background-color", "#fddb3a")
});

// End jQuery


// D3 to inject stories

d3.json("js/data.json").then(function (loadedData) {

    const projects = d3.select('#samples')
        .selectAll('.card')
        .data(loadedData)
        .join('div')
        .attr('class', function (d) {
            return `card column ${d.storyType}`
        });

    const links = projects
        .append('a')
        .attr('href', function (d) {
            return d.url
        })
        .attr('target', '_blank');

    const divs = links
        .append('div')
        .attr('class', 'portfolio-item');

    divs.append('p')
        .attr('class', 'card-tag')
        .append('p')
        .text(d => `✅ ${d.tools}`);

    divs.append('img')
        .attr('src', d => d.img)
        .attr('alt', d => d.imgAlt);

    divs.append('p')
        .attr('class', 'card-text')
        .append('p')
        .text(d => `📍 ${d.org}`);

    divs.append('h3')
        .attr('class', 'card-title')
        .append('span')
        .text(d => `🔗 ${d.project}`);
})

// End D3

// A fun-and-nerdy message for the console

let text = '%cHey, hey! 👋🏽 Want to see more of my code? Head over to https://github.com/aadittambe to see I am currently obsessed about.';
let styles = [
    'font-size: 18px',
    'font-family: monospace',
    'background: black',
    'display: inline-block',
    'color: yellow',
    'padding: 8px 19px',
    'border: 1px dashed;'
].join(';')

console.log(text, styles);

// end fun message