export let UserData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    links: {
      link1: 'github.com/johndoe',
      link2: 'linkedin.com'
    },
  },
  education: {
    entry1: {
      schoolName: 'MIT',
      degree: 'MS Computer Science',
      yearCompleted: '2015',
    },
  },
  experience: {
    job1: {
      employer: 'Google',
      yearStarted: '2015',
      yearEnded: '2017',
      accomplishments: {
        1: 'Lorem1',
        2: 'Lorem2',
        3: 'Lorem3',
      }
    },
  },
  projects: {
    project1: {
      title: 'API project',
      description: 'Created an API to hack into the matrix',
    },
  },
}