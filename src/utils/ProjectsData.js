const Websites = [
    {
        title: 'Scotia Student Hub',
        img: require('../assets/projects/scotiaIMG.png'),
        techStackImg: [
            require('../assets/techStackImgs/reactlogo.png'),
            require('../assets/techStackImgs/docker.png'),
            require('../assets/techStackImgs/circle-ci.png')
        ],
        description: "A website to showcase Scotiabank's Students Opportunities.",
        description2: "The Purpose of this website is to advertise Scotiabank's new career opportunities for students and fresh grads. This page mainly highlights Scotiabanks values, On going programs and internship opportunists for students as well as ways to get in touch with recruiters and network. The content of this website are dynamically managed through JSON files.",
        githubLink: 'https://github.com/sehmim2/scotia-student-page',
        liveDemoLink: 'http://scotia-capstone.surge.sh/',
        skipLiveDemo: false
    },
    {
        title: 'Hot Dog Stand',
        img: require('../assets/projects/hot-dog.png'),
        techStackImg: [
            require('../assets/techStackImgs/nodejslogo.png'),
            require('../assets/techStackImgs/reactlogo.png'),
            require('../assets/techStackImgs/sass.svg')
        ],
        description: "Front-End e-commerce site made using SASS and create react app",
        description2: "The purpose of this website is to showcase my SASS and CSS skills. It also shows component re-usability which could be seen through out my other projects",
        githubLink: 'https://github.com/sehmim/hotdog-stand-with-create-react',
        liveDemoLink: 'http://hotdog-stand.surge.sh/',
        skipLiveDemo: false
    },
    {
        title: 'Instagram On Rails',
        img: require('../assets/techStackImgs/rails3.png'),
        techStackImg: [
            require('../assets/techStackImgs/rails2.png'),
        ],
        description: "Instagram Clone with User Auth and session handling",
        description2: "The purpose of this website is to showcase my SASS and CSS skills. It also shows component re-usability which could be seen through out my other projects",
        githubLink: 'https://github.com/sehmim/Instagram_on_Rails',
        liveDemoLink: '',
        skipLiveDemo: true
    }
]


const Mobile = [
    {
        title: 'Manga Reader App',
        img: require('../assets/techStackImgs/flutter-logo.png'),
        techStackImg: [
            require('../assets/techStackImgs/flutter-logo.png')
        ],
        description: "Colab Product W @isaacpopoola. You can view latest mangas and comics",
        description2: "The Purpose of this website is to advertise Scotiabank's new career opportunities for students and fresh grads. This page mainly highlights Scotiabanks values, On going programs and internship opportunists for students as well as ways to get in touch with recruiters and network. The content of this website are dynamically managed through JSON files.",
        githubLink: 'https://github.com/sehmim2/scotia-student-page',
        liveDemoLink: '',
        skipLiveDemo: true
    },
    {
        title: 'Bank Transaction App',
        img: require('../assets/techStackImgs/android.png'),
        techStackImg: [
            require('../assets/techStackImgs/android.png'),
        ],
        description: "Demonstrates Object Oriented Programming using Bank Transaction",
        description2: "",
        githubLink: 'https://github.com/sehmim2/scotia-student-page',
        liveDemoLink: '',
        skipLiveDemo: true
    },
]

const OpenSource = [
    {
        title: 'Mim Burger',
        img: 'https://media.giphy.com/media/iggLaAO5BrvVdNMaJq/giphy.gif',
        techStackImg: [
            require('../assets/techStackImgs/npm.png'),
            require('../assets/techStackImgs/nodejslogo.png')

        ],
        description: "Simple Hamburger Component that can be imported into your React Project",
        description2: "",
        githubLink: 'https://github.com/sehmim2/mim-burger',
        liveDemoLink: 'https://www.npmjs.com/package/mim-burger',
        skipLiveDemo: false
    }
]


export { Websites, Mobile, OpenSource }