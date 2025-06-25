// In OOP it would require to make greet class and declare methods


const greet = function(salutation) {
  return function(firstName) {
    return `${salutation} ${firstName}`;
  }
}

const howdy = greet('Howdy');

howdy('Jim')