export class Validator {
 constructor(name) {
  this.name = name;
 }
 validateUsername() {
  const reg = /^([^\d-/_])+([a-z-A-Z/-/_][0-9]{0,3})+([^\d-/_])+$/;
  return reg.test(this.name)
 }
}