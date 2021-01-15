# DNI-Nicaragua 0.9
Valida y obtén información de un numero DNI (cedula) Nicaragüense.

## Funcion principal

- DNIcaragua(DNI)

Esta funcion recibe como parametro un string con el numero de cedula que se desea consultar, retorna un objeto con los siguientes atributos:

- IsValid: Boolean => indica si el numero de cedula es valido o no
- Municipality: String => municipio
- Department: String => departamento
- Age: Int => edad de la persona