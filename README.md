# Description

Ce projet est simplement un composant react de menu déroulant. Il est entèrement customisable avec l'appel simple de classes CSS.

## Exemple d'utilisation

Dans l'exemple suivant le composant DropdownMenu est employé à la place d'un input de type "select" au sein d'un formulaire. Le seul élément que l'on a besoin de lui fournir en prop est la liste des choix possibles sous forme d'un array : 

```
import DropdownMenu from "dropdownmenugb"

<fieldset className="address">
    <div className="label">Street</div>
    <input id="street" type="text" ref={street}/>
    <div className="label">City</div>
    <input id="city" type="text" ref={city}/>
    <div className="label">State</div>
    <DropdownMenu data={states} value={state} setValue={setState}/>
    <div className="label">Zip Code</div>
    <input id="zip-code" type="number" ref={zipCode}/>
</fieldset>
```
