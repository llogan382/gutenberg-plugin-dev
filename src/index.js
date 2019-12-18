
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
	title: 'Example: Controls (esnext)',
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
			},
			className,
		} = props;

		const onChangeContent = (newContent) => {
			props.setAttributes({ content: newContent });
		};

		const onChangeAlignment = (newAlignment) => {
			props.setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });
		};

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={alignment}
							onChange={onChangeAlignment}
						/>
					</BlockControls>
				}
				<RichText
					className={className}
					style={{ textAlign: alignment }}
					tagName="p"
					onChange={onChangeContent}
					value={content}
				/>
			</div>
		);
	},
	save: (props) => {
		return (
			<RichText.Content
				className={`gutenberg-examples-align-${props.attributes.alignment}`}
				tagName="p"
				value={props.attributes.content}
			/>
		);
	},
});