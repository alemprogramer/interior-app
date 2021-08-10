const url = process.env.PUBLIC_URL;
const imgUrl = `${url}/vendor/images`;

const take = [
    {
        title: 'Vacant Photos',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 2
    }, {
        title: 'Floor Plans',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 2
    }, {
        title: 'Dimensions',
        img: `${imgUrl}/vacant.png`,
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        importance: 1
    }
]
const give = [
    {
        title: 'Digitally Staged Photos',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }, {
        title: 'Same Size',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }, {
        title: 'Top Notch Support',
        text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
        img: `${imgUrl}/vacant.png`
    }
]
const faq = [
    {
        head: `What are the pricing packages for the virtual staging service?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `What happens if I upload a photo that is a small size or low resolution or may not work with your service?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `How long does it take to process my order and get my staged photos back?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `How long can I use the virtually staged photos?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `Does VSP alter the photographs by changing the wall colors, adding appliances and removing fixtures, etc?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }, {
        head: `Can I provide suggestions with respect to the staging of the photos?`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.`
    }
]
const different = [
    {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Stagers',
        text: 'We specialize in transfcascasorming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professasascional Home Stagers',
        text: 'We specialize in trascascansforming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Hocasme Stagers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Staascgers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Professional Home Stagers',
        text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homescbf that sells faster and for top dollar.'
    }, {
        icon: `${imgUrl}/user.png`,
        title: 'Profesgfdsional Home Stagers',
        text: 'We specialnfgnfgize in transforming photos of vacant properties into beautiful, ' +
                'virtually staged homes that sells faster and for top dollar.'
    }
]
const howItWork = [
    {
        head: `Virtual Home Staging`,
        text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
        image: `${imgUrl}/how.jpg`
    }, {
        head: `Interior Design and Support`,
        text: `Upload photos (not the ones you can take on your phone)`,
        image: `${imgUrl}/how_2.jpg`
    }, {
        head: `Virtual Home Staging`,
        text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
        image: `${imgUrl}/how_3.jpg`
    }, {
        head: `Interior Design`,
        text: `Upload photos (not the ones you can take on your phone)`,
        image: `${imgUrl}/how_4.jpg`
    }
]

export default imgUrl
export { take, give, faq, different, howItWork }
