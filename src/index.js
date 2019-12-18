
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { IconButton } from '@wordpress/components';
import {
	RichText,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
} from '@wordpress/block-editor';



registerBlockType('gutenberg-examples/example-01-basic-esnext', {
	title: __('Example: Basic (ESNext)', 'gutenberg-examples'),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},

		backgroundImage: {
			type: 'string',
			default: null,

		},
	},
	example: {
		attributes: {
			content: 'Hello World',
			alignment: 'right',
		},
	},
	edit: (props) => {
		const {
			attributes: {
				content,
				alignment,
				backgroundImage,
			},
			className,
		} = props;

		const onChangeContent = (newContent) => {
			props.setAttributes({
				content: newContent
			});
		};

		function onSelectImage(newImage) {
			props.setAttributes({ backgroundImage: newImage.sizes.full.url });
		}

		const onChangeAlignment = (newAlignment) => {
			props.setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });
		};

		return (
			<div class="header-image">

				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={onChangeAlignment}

					/>
					<AlignmentToolbar
						title={' Image upload'}
					/>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={backgroundImage}
						render={({ open }) => {
							return (
								<IconButton
									onClick={open}
									icon="upload"
									className="editor-media-placeholder__button is-button is-default is-large"
								>
									Background Image
								</IconButton>
							)

						}
						}
					/>
				</BlockControls>


				<RichText
					className={className}
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: 'auto',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
					tagName="p"
					onChange={onChangeContent}
					value={content}

				/>

			</div>
		);
	},
	save: (props) => {
		const {
			attributes: {
				content,
				backgroundImage,
			},
			className,
		} = props;


		return (
			<div class="header-image"
			// style={{
			// 	backgroundImage: `url(${backgroundImage})`,
			// 	backgroundSize: 'cover',
			// 	backgroundPosition: 'center',
			// 	backgroundRepeat: 'no-repeat',
			// 	height: '100%',
			// }}
			>
				<RichText.Content

					tagName="p"
					value={props.attributes.content}
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: 'auto',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				/>
			</div>
		);
	},
});