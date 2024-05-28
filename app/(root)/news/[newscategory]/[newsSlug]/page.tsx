import React from 'react'

export default async function page({
    params
}: {
    params: String[]
}) {

    return (
        <div>
            {JSON.stringify(params)}
        </div>
    )
}
