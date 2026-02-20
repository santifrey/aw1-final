TurismoApp

Una aplicación web de turismo para reservar destinos y gestionar reservas de viajes.

Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)

Características

- **Exploración de Destinos**: Visualiza una galería de destinos turísticos con descripciones cortas y largas
- **Sistema de Reservas**: Completa un formulario para reservar viajes
- **Gestión de Reservas**: Visualiza, gestiona y elimina tus reservas
- **Formulario de Contacto**: Ponte en contacto con validación de email
- **Almacenamiento Local**: Las reservas se guardan en localStorage del navegador
- **Interfaz Responsiva**: Diseño adaptable para dispositivos móviles y de escritorio

## Estructura del Proyecto

```
aw1 final/
├── index.html              # Página de inicio
├── destinos.html           # Página de seleccion de destinos 
├── reserva.html            # Formulario de reserva
├── misreservas.html        # Página con las reservas realizadas
├── contacto.html           # Formulario de contacto
├── css/
│   └── styles.css          # Estilos globales
├── img/                    # Imágenes usadas por las páginas
│   ├── bariloche.jpg
│   ├── mendoza.jpg
│   ├── iguazu.jpeg
│   ├── ushuaia.jpeg
│   ├── Salta.jpg
│   └── inicio.jpg
├── data/
│   └── destinos.json       # Archivo con el listado de destinos disponibles
└── js/
    ├── pages/
    │   ├── destinosPage.js      # Lógica de página destinos
    │   ├── reservaPage.js       # Lógica de formulario reserva
    │   ├── misreservasPage.js   # Lógica de mis reservas
    │   └── contactoPage.js      # Lógica de formulario contacto
    ├── services/
    │   ├── api.js          # Lectura del json
    │   └── storage.js      # Gestión de localStorage para guardar y leer reservas
    └── utils/
        ├── validaciones.js # Validación de campos ingresados por el usuario
        └── calculadora.js  # Cálculos
```

## Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript**: Lógica de aplicación con módulos
- **Bootstrap**: Framework

## Instalación

1. Descarga o clona el proyecto
2. No requiere instalación de dependencias (es una aplicación vanilla JavaScript)
3. Abre `index.html` en un navegador web moderno

## Uso

### Explorar Destinos
1. Ve a la página "Destinos"
2. Haz clic en cualquier destino para ver más detalles
3. Desde el boton puedes hacer una reserva directamente

### Hacer una Reserva
1. Selecciona "Reserva" en el menú
2. Completa el formulario con:
   - Nombre (solo letras y espacios)
   - Email válido
   - Destino seleccionado
   - Cantidad de personas
   - Opcionalmente, agregar seguro de viaje
3. El total se calcula automáticamente
4. Haz clic en "Confirmar Reserva"

### Gestionar Mis Reservas
1. Ve a "Mis Reservas" para ver todas tus reservas guardadas
2. Visualiza detalles: nombre, email, destino, personas y total
3. Haz clic en "Eliminar" para remover una reserva

### Contacto
1. Selecciona "Contacto"
2. Completa el formulario con:
   - Nombre válido
   - Email válido para respuesta
   - Tu mensaje
3. El botón se habilita solo cuando el email sea válido
4. Haz clic en "Enviar Mensaje"

## Funcionalidades Detalles

### Validación
- **Email**: Patrón `^\S+@\S+\.\S+$`
- **Nombre**: Solo letras y espacios `^[A-Za-z\s]+$`
- El botón de contacto solo se habilita con email válido

### Cálculo de Total
```javascript
Total = (precio × personas) + (personas × 5000 si seguro está activo)
```

### Almacenamiento
Las reservas se guardan en `localStorage` con el nombre `"reservas"` como un array JSON:


## Notas

- Las reservas solo persisten mientras no se borre el localStorage del navegador
- Todos los formularios incluyen validaciónes
- Las imágenes de destinos se cargan desde `img`
- Para modificar los destinos disponibles editar `destinos.json`

## Autor

Santiago Freytes - Proyecto de Aplicaciones Web I - 2026


