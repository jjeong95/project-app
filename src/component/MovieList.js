export default function movieList (props) {

    console.log(props, '3')

    const movies = props.data

    return(
        <div>
            {
                movies.map((data,index) => {

                    console.log(data,'12')

                    return(
                        <div>
                            {data.Title}
                        </div>
                    )
                })
            }
        </div>
    )

}