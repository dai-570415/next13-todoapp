export const Header = (props: { pageTitle:string }) => {
    return (
        <header>
            <h1>{props.pageTitle}</h1>
        </header>
    );
}