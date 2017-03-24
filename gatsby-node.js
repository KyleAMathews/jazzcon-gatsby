const fs = require("fs");
const _ = require("lodash");

const blob = JSON.parse(fs.readFileSync("./schedule.json"));
const days = blob.schedule.conference.days;

// Pull out persons
let persons = [];
let events = [];
days.forEach(day => {
  Object.keys(day.rooms).forEach(room => {
    day.rooms[room].forEach(event => {
      events.push(
        Object.assign(
          {},
          event,
          {
            persons: event.persons.map(person => person.id),
          },
          { type: "Event" }
        )
      );
      event.persons.forEach(person => {
        persons.push(Object.assign({}, person, { type: `Person` }));
      });
    });
  });
});

persons = _.uniqBy(persons, person => person.id);

// Add to each person their event ids.
persons.forEach(person => {
  const eventIds = events
    .filter(event => _.includes(event.persons, person.id))
    .map(e => e.id);
  person.events = eventIds;
});

exports.modifyAST = ({ args }) => {
  const { ast } = args;
  ast.children = ast.children.concat(persons, events);
};
