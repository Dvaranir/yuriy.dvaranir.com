export interface IDefaultButtonProps {
    content: string,
    href?: string,
    link?: boolean,
    button?: boolean,
    type?: "button" | "reset" | "submit" | undefined,
    onClick?: () => void,
    additionalClass?: string,
    newWindow?: boolean,
}

