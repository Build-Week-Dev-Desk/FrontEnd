{
    user: {
        id: num
        student:bool,
        staff: bool, 
        staffMyTickets: [...tickets]
        studentMyTickets:[...tickets]
        email: 'string',
        name: 'string'
        timeCreated:date
    }
    tickets: [
        {
            id:
            title:
            status: options: [open, claimed, resolved]
            description:
            attemptedSolutions: [], 
            category: [html, css, javascript, python]
            asker: userid
            timeCreated: date,
            solution:{
                timeCreated: date,
                body: 'string'
                answerer: user.name
            }
            

        }
    ]

}