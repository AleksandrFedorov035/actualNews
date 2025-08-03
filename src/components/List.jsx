import withPopular from './withPopular';
import withNew from './withNew';
import Article from './Article';
import Video from './Video';

function List(props) {
    return props.list.map(item => {
        let Component = item.type === 'video' ? Video : Article;
        if (item.views > 1000) {
            Component = withPopular(Component);
        } else if (item.views < 100) {
            Component = withNew(Component);
        }
        return (
            <Component {...item} />
        );
    });
};

export default List;
