// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    phrase() {
        return (`Hello my is ${this.name}, I am from ${this.location}.`);
    }
}


class Instructor extends Person {
    constructor(instrAttributes) {
        super(instrAttributes);
        this.specialty = instrAttributes.specialty;
        this.favLanguage = instrAttributes.favLanguage;
        this.catchPhrase = instrAttributes.catchPhrase;
    }
    demo() {
        return (`Today we are learning about ${this.favLanguage}.`);
    }
    grade(subject) {
        return (`${this.name} receives a perfect score on ${subject}!`);
    }
}

class Student extends Instructor {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
    }
    listsSubjects(favSubjects) {
        return (`${favSubjects}`);
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
        this.subject = pmAttributes.subject;
    }
    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student) {
        return (`${this.name} debugs ${student}'s code on ${this.subject}.`);
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const pebbles = new Student({
    name: 'Pebbles',
    location: 'Stoney Creek',
    age: 20,
    gender: 'female',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    PRAassignment: 'User Interface',
    sprintChallenge: "Responsive CSS"
});

const wilma = new ProjectManager({
    name: 'Wilma',
    location: "Bedrock",
    age: 25,
    gender: 'female',
    standUp: 'Slack',
    subject: 'Javascript'
});

  console.log(fred.phrase());
  console.log(fred.demo());
  console.log(pebbles.grade('User Interface'));
  console.log(pebbles.listsSubjects(['Html','CSS', 'JavaScript']));
  console.log(pebbles.PRAssignment('Responsive CSS'));
  console.log(pebbles.sprintChallenge('Javascript III'));
  console.log(wilma.standUp('WEB 17'));
  console.log(wilma.debugsCode('Pebble'));