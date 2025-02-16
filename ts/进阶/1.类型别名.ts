type Name = string;
type NameResolve = () => string;
type NameOfResolve = Name | NameResolve;
function getName(n: NameOfResolve): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
