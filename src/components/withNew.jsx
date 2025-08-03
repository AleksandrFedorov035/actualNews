import New from './New';

function withNew(Component) {
    return function(props) {
        return (
            <New>
                <Component {...props} />
            </New>
        );
    };
}

export default withNew;
