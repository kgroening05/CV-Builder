export let UserData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    links: [
      'github.com/johndoe',
      'linkedin.com'
    ],
  },
  education: 
    [
      {
        schoolName: 'MIT',
        degree: 'MS Computer Science',
        yearCompleted: '2015',
      },      
      {
        schoolName: 'Syracuse University',
        degree: 'BS Computer Science',
        yearCompleted: '2013',
      },
    ],
  experience: 
    [
      {
        employer: 'Google',
        yearStarted: '2015',
        yearEnded: '2017',
        accomplishments: {
          1: 'Lorem1',
          2: 'Lorem2',
          3: 'Lorem3',
        }
      },
      {
        employer: 'Facebook',
        yearStarted: '2017',
        yearEnded: '2023',
        accomplishments: {
          1: 'Lorem1',
          2: 'Lorem2',
          3: 'Lorem3',
        }
      }
    ],
  projects: [
    {
      title: 'API project',
      description: 'Created an API to hack into the matrix',
    },
    {
      title: 'Web App project',
      description: 'Created an app to serve up cat gifs',
    },
  ],
}