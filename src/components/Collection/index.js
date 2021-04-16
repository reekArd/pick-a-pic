import { Container, CollectionInfo, Labels, Label } from './styles';

export const Collection = ({ data }) => {
  const initialToUppercase = word => {
    return word.replace(/^\w/, word => word.toUpperCase());
  };

  return (
    <Container>
      <img
        src={data.cover_photo.urls.small}
        alt={data.cover_photo.alt_description}
      />
      <CollectionInfo>
        <h3>{data.title}</h3>
        <span>{data.total_photos} photos</span>
        <Labels>
          <Label>{initialToUppercase(data.tags[0].title)}</Label>
          <Label>{initialToUppercase(data.tags[1].title)}</Label>
          <Label>{initialToUppercase(data.tags[2].title)}</Label>
        </Labels>
      </CollectionInfo>
    </Container>
  );
};
