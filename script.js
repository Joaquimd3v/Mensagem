const container = document.getElementById("messages-container")

async function loadMessages(){

  const response = await fetch("./data/messages.json")

  const messages = await response.json()

  renderMessages(messages)

}

function renderMessages(messages){

  messages.forEach((msg, index) => {

    // DATE DIVIDER

    if(msg.type === "date"){

      const date = document.createElement("div")

      date.className = "date-divider"

      date.innerText = msg.date

      container.appendChild(date)

      return
    }

    // MESSAGE

    const message = document.createElement("div")

    message.className = "message"

    message.style.animationDelay = `${index * .05}s`

    message.innerHTML = `

      <img
        class="avatar"
        src="${msg.avatar}"
      />

      <div class="message-content">

        <div class="message-top">

          <div class="name">
            ${msg.sender}
          </div>

          <div class="time">
            ${msg.time}
          </div>

        </div>

        <div class="text">
          ${msg.text}
        </div>

        ${
          msg.image
          ?
          `
            <img
              class="message-image"
              src="${msg.image}"
            />
          `
          :
          ""
        }

      </div>

    `

    container.appendChild(message)

  })

}

loadMessages()
