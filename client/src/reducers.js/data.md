const state = {
    user {
        id: num,
        student: bool,
        staff: bool,
        staffTickets: [...tickets],
        studentTickets: [...tickets],
        email: 'string',
        name: 'string',
        timeCreated: date
    }

    tickets: [{
        id: num,
        title: 'string',
        status: 'one of [open, claimed, resolved]',
        description: 'string',
        attemptedSolutions: 'string',
        category: 'one of [html, css, javascript, python]',
        asker: user.name,
        timeCreated: date,
        solution: {
            timeCreated: date,
            body: 'string'
            answerer: user.name
        }
    }]
}