import doberman from './doberman.webp';
import golden from './goldenretriever.jpeg';
import black from './blackcat.jpeg';
import orange from './orangecat.webp';

export const QuizData = [
    { 
        question: 'Choose a landscape', 
        name: '0', 
        answers: [
            {
                label: 'City',
                image: 'asdf',
                value: 'blackcat'
            },
            {
                label: 'Beach',
                image: 'asdf',
                value: 'goldenretriever'
            },
            {
                label: 'Mountain',
                image: 'asdf',
                value: 'doberman',
            },
            {
                label: 'Forest',
                image: 'asdf',
                value: 'orangecat'
            },
        ]
    },
    { 
        question: 'Choose a season', 
        name: '1', 
        answers: [
            {
                label: 'Fall',
                image: 'asdf',
                value: 'blackcat'
            },
            {
                label: 'Summer',
                image: 'asdf',
                value: 'goldenretriever'
            },
            {
                label: 'Spring',
                image: 'asdf',
                value: 'doberman',
            },
            {
                label: 'Winter',
                image: 'asdf',
                value: 'orangecat'
            },
        ]
    },
    { 
        question: 'Choose a flavor profile', 
        name: '2', 
        answers: [
            {
                label: 'Salty',
                image: 'asdf',
                value: 'blackcat'
            },
            {
                label: 'Sweet',
                image: 'asdf',
                value: 'goldenretriever'
            },
            {
                label: 'Sour',
                image: 'asdf',
                value: 'doberman',
            },
            {
                label: 'Spicy',
                image: 'asdf',
                value: 'orangecat'
            },
        ]
    },
    { 
        question: 'Choose a movie genre', 
        name: '3', 
        answers: [
            {
                label: 'Romance',
                image: 'asdf',
                value: 'blackcat'
            },
            {
                label: 'Comedy',
                image: 'asdf',
                value: 'goldenretriever'
            },
            {
                label: 'Thriller / Action',
                image: 'asdf',
                value: 'doberman',
            },
            {
                label: 'Horror',
                image: 'asdf',
                value: 'orangecat'
            },
        ]
    },
    { 
        question: 'Choose a superpower', 
        name: '4', 
        answers: [
            {
                label: 'Invisibility',
                image: 'asdf',
                value: 'blackcat'
            },
            {
                label: 'Telepathy',
                image: 'asdf',
                value: 'goldenretriever'
            },
            {
                label: 'Flight',
                image: 'asdf',
                value: 'doberman',
            },
            {
                label: 'Superspeed',
                image: 'asdf',
                value: 'orangecat'
            },
        ]
    },
]

export const QuizAnswers = {
    orangecat: {
        animal: 'Orange Cat',
        description: `You're chaotic, smart, and cuddly. Orange cats typically possess a lively and outgoing personality, often affectionate and playful with a hint of mischievousness. They tend to be sociable creatures, enjoying both human and feline company alike.`,
        date: 'For this reason, we should probably go bowling! I will be really bad, but you know what they say... you could either good at bowling or good at se-',
        img: orange,
    }, 
    blackcat: {
        animal: 'Black Cat',
        description: `You're introverted, independent, and rational! A black cat often exudes mystery and elegance, with a calm and composed demeanor. They are known for their independent yet affectionate nature, captivating those around them with their graceful movements and wise gaze.`,
        date: 'For this reason, we should do arts and crafts. It will be a creative endeavor and stimulating to the mind!',
        img: black,
    },
    doberman: {
        animal: 'Doberman',
        description: `You're protective, intelligent, and loyal. A Doberman is characterized by its loyalty, intelligence, and strong protective instincts, making it an excellent guard dog and companion. If comfortable with the people around them, they can be gentle and affectionate, displaying unwavering devotion to their owners.`,
        date: `For this reason, I will teach you to hula hoop. I couldn't think of a third option... I'm so sorry... but this would be funny to watch jdsalfjdsklfjdsakl`,
        img: doberman,
    },
    goldenretriever: {
        animal: 'Golden Retriever',
        description: `You're sweet, friendly, and energetic! Golden Retrievers are known for their friendly, outgoing nature and boundless enthusiasm for life. They're gentle, affectionate, and eager to please, making them beloved family members and reliable dogs.`,
        date: 'For this reason, we should play some games. Perhaps some Ping Pong and Pool? What do you think, ready to lose?',
        img: golden,
    }
}