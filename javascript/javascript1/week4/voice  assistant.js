// Gretting

let userName = null;
let todo = [];
let events = [];

function getReply(command) {
  if (command.toLowerCase().startsWith("hello my name is")) {
    let words = command.split(" ");
    newName = words[words.length - 1];
    if (userName === newName) {
      return ` You already told me your name is ${userName}`;
    }

    userName = newName;
    return `Nice to meet you ${newName}`;
  }

  // Ask uer's name

  if (command.toLowerCase() === "what is my name") {
    if (userName != null) {
      return `your name is ${userName}`;
    } else {
      return " I don't know your name. ";
    }
  }

  // Add taske in todo list

  if (
    command.toLowerCase().startsWith("add ") &&
    command.endsWith("to my todo")
  ) {
    let words = command.split(" ");
    let task = "";
    for (let i = 1; i < words.length - 3; i++) {
      task += words[i] + " ";
    }
    todo.push(task);
    return `${task}added to your todo.`;
  }

  //  Find the task in the todo list and remove it

  if (
    command.toLowerCase().startsWith("remove ") &&
    command.endsWith("from my todo")
  ) {
    let words = command.split(" ");
    let removedTask = "";
    for (let i = 1; i < words.length - 3; i++) {
      removedTask += words[i] + " ";
    }
    for (let i = 0; i < todo.length; i++) {
      if (removedTask == todo[i]) {
        todo.splice(i, 1);
      }
    }

    return `Removed ${removedTask}from your todo.`;
  }

  //  Find the task in the todo list and show it in the message

  if (command.toLowerCase() === "what is on my todo?") {
    if (todo.length > 0) {
      let taskName = [];
      for (let i = 0; i < todo.length; i++) {
        taskName += todo[i];
      }

      return `you have ${todo.length} todos - ${taskName}`;
    } else {
      return " Todo list is empty.";
    }
  }
  if (command.toLowerCase() === "what day is it today?") {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.toLocaleString("en-GB", { month: "long" });
    const day = today.getDate();
    return ` ${day}. of ${month} ${year}`;
  }

  // Simple math activity

  if (command.toLowerCase().startsWith("what is")) {
    let words = command.split(" ");
    let operant1 = words[2];
    let operant2 = words[4];
    let operator = words[3];
    switch (operator) {
      case "+":
        return Number(operant1) + Number(operant2);
      case "-":
        return Number(operant1) - Number(operant2);
      case "*":
        return Number(operant1) * Number(operant2);
      case "/":
        return Number(operant1) / Number(operant2);
    }
  }

  // Set a timer for ... min

  if (command.toLowerCase().startsWith("set a timer for")) {
    let words = command.split(" ");
    let timeSetTime = words[4];
    setTimeout(() => {
      console.log("Timer done.");
    }, timeSetTime * 60 * 1000);
    return `Timer set for ${timeSetTime} minutes`;
  }

  // Add more command here
  //1.Creat event anniversary to calender on 21-12-2025
  if (command.toLowerCase().startsWith("creat event")) {
    let words = command.split(" ");
    let eventTitle = words[2];
    let date = words[words.length - 1];
    let event = { title: eventTitle, date: date };
    events.push(event);

    return `Event "${eventTitle}" created on ${date}`;
  }
  //2.What is in my calendar
  if (command === "What is in my calendar") {
    return events;
  }
}
