import './MyLabel.css';


export interface Props{
    /** 
     * Text to display
     * */
    label: string,
    /**
     * Label size
     * */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    /**
     * Capitalize all letters
     * */
    allCaps?: boolean,
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string,

    /**
     * Color personalizado de la fuente
     */
    backgroundColor?: string
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor,
    backgroundColor = 'transparent'
}: Props) => {
    return (
        <span className={`${size} ${color} label`}
            style={{color: fontColor, backgroundColor}}
        >
            {allCaps ? label.toUpperCase(): label}
        </span>
    )
}

// SE DEBE AL NOMBRE DE LA PROPIEDAD 
/*
    label:
        Propósito: Define el texto que se mostrará en el componente.
        Tipo: string
        Uso: Se utiliza para mostrar el texto dentro del componente <span>.
        Ejemplo: Si label es "Enviar", el texto mostrado será "Enviar".
    fontColor:
        Propósito: Define el color del texto del componente.
        Tipo: string
        Uso: Se utiliza para aplicar un estilo en línea al componente <span>, específicamente el color del texto.
        Ejemplo: Si fontColor es "red", el texto se mostrará en color rojo.
*/