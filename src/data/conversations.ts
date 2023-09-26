//sample conversations with caretakers/ potential tenants

const conversations = [
  {
    id: 1,
    user: {
      id: 1,
      name: "User1",
      avatar: "user1.jpg",
    },
    caretaker: {
      id: 101,
      name: "Caretaker A",
      avatar: "caretaker1.jpg",
    },
    messages: [
      {
        id: 1,
        sender: 101,
        text: "Hello, how can I assist you today?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: 1,
        text: "I have a question about my pet's diet.",
        timestamp: new Date(),
      },
      // More messages...
    ],
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "User2",
      avatar: "user2.jpg",
    },
    caretaker: {
      id: 102,
      name: "Caretaker B",
      avatar: "caretaker2.jpg",
    },
    messages: [
      {
        id: 1,
        sender: 102,
        text: "Hi there! How can I help you?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: 2,
        text: "I need advice on grooming my pet.",
        timestamp: new Date(),
      },
      // More messages...
    ],
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "User3",
      avatar: "user3.jpg",
    },
    caretaker: {
      id: 103,
      name: "Caretaker C",
      avatar: "caretaker3.jpg",
    },
    messages: [
      {
        id: 1,
        sender: 103,
        text: "Hello! What can I do for you today?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: 3,
        text: "I have a question about pet vaccinations.",
        timestamp: new Date(),
      },
      // More messages...
    ],
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "User4",
      avatar: "user4.jpg",
    },
    caretaker: {
      id: 104,
      name: "Caretaker D",
      avatar: "caretaker4.jpg",
    },
    messages: [
      {
        id: 1,
        sender: 104,
        text: "Hi! How can I assist you with your pet?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: 4,
        text: "My pet is not eating well. What should I do?",
        timestamp: new Date(),
      },
      // More messages...
    ],
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "User5",
      avatar: "user5.jpg",
    },
    caretaker: {
      id: 105,
      name: "Caretaker E",
      avatar: "caretaker5.jpg",
    },
    messages: [
      {
        id: 1,
        sender: 105,
        text: "Hello! How can I help you and your pet?",
        timestamp: new Date(),
      },
      {
        id: 2,
        sender: 5,
        text: "I'm looking for pet training advice.",
        timestamp: new Date(),
      },
      // More messages...
    ],
  },
];

export default conversations;
