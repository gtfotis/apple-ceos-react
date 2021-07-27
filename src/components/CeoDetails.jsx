import { useParams } from 'react-router-dom';

const CeoDetails = ({ceoList}) => {
    const { ceo_slug } = useParams();
    const ceo = ceoList.find((ceo) => {
        return ceo.slug === ceo_slug ? ceo : null;
    })

    return (
        <p>{ceo.name} was CEO of Apple Computers, Inc. in {ceo.first_year_active}.</p>
    );
}

export default CeoDetails;