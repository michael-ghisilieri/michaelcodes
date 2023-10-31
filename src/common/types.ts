type FloatType = 'left' | 'right' | 'none' | 'inline-start' | 'inline-end';

export interface ImageInterface {
  image: string;
  title: string;
  alt: string;
}

export interface CardInterface extends ImageInterface {
  content: string;
}

export interface PanelInterface extends ImageInterface {
  text: string;
  imgPos: FloatType;
  txtPos: FloatType;
}
