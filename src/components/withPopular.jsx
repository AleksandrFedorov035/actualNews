import Popular from './Popular';

function withPopular(Component) {
    return function(props) {
        return (
            <Popular>
                <Component {...props} />
            </Popular>
        );
    };
}

export default withPopular;
