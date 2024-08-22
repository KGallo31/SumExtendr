require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.token)

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})


const run = async () => {
    const prompt = "can you summarize the article from this URL? https://www.nbcnews.com/business/energy/inflation-reduction-act-sparked-manufacturing-clean-energy-boom-rcna167315" 

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    const container = document.getElementsByClassName("container")[0]

    container.innerHTML = `<div class="title"> ${text} </div>`
}

const button = document.getElementsByClassName("main-button")


button.addEventListener("click", run)