const data = {
    personalInfo: {
        fullName: 'Angelina Igunova',
        birthDate: new Date('1990-01-11'),
        city: 'Moscow',
        position: 'QA Engeener, tester'
    },
    contacts:
        [
            {
                type: 'phone' as const,
                contact: '@Angelina_sono',
                img: './public/image/telegramm.png'
            }, {
                type: 'email' as const,
                contact: 'igunova90@mail.ru',
                img: './public/image/email.png'
            }, {
                type: 'github' as const,
                contact: 'github/angelin919',
                img: './public/image/github.png'
            }

        ],
    skills: [
        {
            id: '1',
            title: 'Теория тестирования',
            category: 'hard'as const,
            description: 'Понимание жизненного цикла ПО (SDLC) и тестирования (STLC), знание видов тестирования (функциональное, регрессионное, дымовое и др.).',
            img: './public/image/icons8-тестирование-50.png'
        },
        {
            id: '2',
            title: 'Тест-дизайн',
            category: 'hard'as const,
            description: 'Умение составлять тест-кейсы, чек-листы и использовать техники: граничные значения, эквивалентные классы, попарное тестирование.'
            , img:' ./public/image/icons8-проверено-50.png'

        },
        {
            id: '3',
            title: 'Инструменты баг-трекинга',
            category: 'hard'as const,
            description: 'Работа в Jira, Qase, TestRail.'
            , img: './public/image/icons8-баг-50-2.png'


        },
        {
            id: '4',
            title: 'Клиент-серверная архитектура',
            category: 'hard'as const,
            description: ' Понимание работы веб-приложений, HTTP-методов, умение пользоваться DevTools в браузере, работа c Collections в Postman, Swagger.'
            , img: './public/image/icons8-почтальон-инк.-50-2.png'

        },
        {
            id: '5',
            title: 'Внимательность к деталям:',
            category: 'soft'as const,
            description: 'Способность заметить малейшее несоответствие требованиям.'
            , img: './public/image/icons8-баг-50-4.png'

        },
        {
            id: '6',
            title: 'Языки программирования',
            category: 'hard'as const,
            description: 'Frontend:Основы HTML, CSS, JavaScript, а также фреймворк React(Next). Backend: PHP, Java' ,
            img: './public/image/icons8-программирование-50.png'
        },

    ], educations: [
        {
            id: '10',
            title: 'Российский экономический университет имени Г.В.Плеханова',
            desccription: ' «Fullstack - разработка на языке Java» ',
            date: new Date('2023')

        },
        {
            id: '20',
            title: 'Skillbox',
            desccription: ' «Веб разработчик на PHP» ',
            date: new Date('2026')

        },
        {
            id: '30',
            title: 'Stepik',
            desccription: ' «Тестирование ПО с нуля. Теория + практика. Уровень PRO» ',
            date: new Date('2026')

        },

    ]
    ,
    experience: [
        {
            id: '11',
            title: 'Университет 2',
            description: '2019'

        },

    ],
    hobbies: [{
        id: '111',
        title: 'Sport',
        description: 'Sport'
    },
    {
        id: '211',
        title: 'New',
        description: 'Something new'
    },
    ]


}

export default data

