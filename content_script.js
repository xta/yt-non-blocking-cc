// js to execute after page load

const elementId = "cc-mover-element";
const interval = 50;

const hideOriginal = true;

function createDiv() {
    // TASK: adjust font-size (if text is too long to fit)
    const style = 'position:fixed;bottom:0px;width:100vw;height:12vh;z-index:10000;background:green;color:black;font-size:5rem;padding:20px;'
    const div = document.createElement('div');
    div.id = elementId;
    div.style.cssText = style;
    div.textContent = '';

    // TASK: place `div` between #player and #below
    document.body.appendChild(div);
}

function captionContents() {
    const query = document.getElementsByClassName('ytp-caption-segment');
    if (query && query.length > 0) {
        let text = '';
        for (let i = 0; i < query.length; i++) {
            const segment = query[i];
            const segmentText = segment.textContent;
            text = `${text} ${segmentText}`.trim();

            // TASK: not show the original CC all the time
            if (hideOriginal) {
                segment.style.opacity = "0.0";
            }
        }

        return text;
    }
    return null
}

function updateText() {
    const el = document.getElementById(elementId);
    const text = captionContents()
    if (text) {
        el.textContent = text;
    } else {
        el.textContent = '';
    }
}

function refresh() {
    updateText()

    setTimeout(refresh, interval);
}

// run script

createDiv();
setTimeout(refresh, interval);


