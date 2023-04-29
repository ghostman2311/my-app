import React, {ComponentType} from 'react';

interface withLoadingProps {
    loading: boolean
}

const withLoading = <P extends object>(Component: ComponentType<P>) => {
    return class withLoading extends React.Component<P & withLoadingProps> {
        render() {
            const { loading, ...props } = this.props;
            return loading ? 'loading' : <Component {...props as P} />
        }
    }
}

export { withLoading }