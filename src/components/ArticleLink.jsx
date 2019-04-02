import React from 'react';
import { Link, redirectTo } from '@reach/router';

export default ({ partial = true, ...props }) => (
    <Link
        {...props}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
            const isActive = partial
                ? isPartiallyCurrent
                : isCurrent;
            return {

            };
        }}
    />
)