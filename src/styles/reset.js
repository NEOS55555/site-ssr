const css = `
	    .loading {
		    position: absolute;
		    left: 0;
		    top: 0;
		    width: 100%;
		    height: 100%;
		    display: flex;
		    color: #fff;
		    background: #e6e2e2;
		    font-size: 5em;
		    justify-content: center;
		    align-items: center;
		}
		.loading span {
		    text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent, 0 9px transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
		    transform: translateY(20px);
		    animation: bounce 0.3s ease infinite alternate;
		}
		@keyframes bounce {
		    to {
		      text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb, 0 50px 25px rgba(0, 0, 0, 0.2);
		      transform: translateY(-20px);
		    }
		}

		body {
		    color: $fontColor;
		    p {
		        margin: 0;
		    }
		}
		.main-content-wrapper {
		    display: flex;
		    justify-content: center;
		}
		.main-content {
		    width: 734px;
		}
		.self-wrapper.flex {
		    .self-line {
		        display: flex;
		        label {
		            width: 50px;
		        }
		        .img-ctn {
		            width: 100%;
		        }
		    }
		}
		.self-wrapper {
		    .self-line {
		        .self-text-wrapper {
		            width: 100%;
		            .bf-container {
		                height: auto;
		            }
		        }
		        label {
		            color: #fff;
		            display: block;
		        }
		    
		        .img-ctn {
		            cursor: pointer;

		            img {
		                max-width: 90%;
		                max-height: 160px;
		            }
		        }
		        .bf-container  {
		            width: 100%;
		        }
		        .inline {
		            display: flex;
		            flex-direction: column;

		            .code {
		                background: #fff;
		            }
		        }

		        

		    }

		    .self-line:not(:last-child) {
		        margin-bottom: .8rem;
		    }

		    .self-line.must {
		        label:first-child::after {
		            content: '*';
		            color: red;
		        }
		    }
		}

		.self-modal-wrapper {
		    .self-wrapper {
		        padding: 24px;
		    }
		}
		.error-tip {
		    color: $errorColor;
		    padding-top: .1rem;
		    font-size: 12px;
		}
		.self-footer {

		  text-align: right;
		  background: transparent;
		  border-top: 1px solid #f0f0f0;
		  border-radius: 0 0 2px 2px; 
		    button+button {
		        margin-bottom: 0;
		        margin-left: 8px;
		    }
		}

		.password-tip {
		    margin: 0;

		    .error {
		        color: $errorColor;
		    }
		}

		.ant-menu-root.ant-menu-vertical, .ant-menu-root.ant-menu-vertical-left, .ant-menu-root.ant-menu-vertical-right, .ant-menu-root.ant-menu-inline,
		.ant-menu {
		    background: transparent;
		    box-shadow: getBigShadow($shadowDarkColor);
		}
		.ant-menu-item:active, .ant-menu-submenu-title:active {
		    background: $listActiveBgColor;
		}
		.ant-checkbox-wrapper,
		.ant-menu-item > a {
		    color: $fontColor;
		}
		.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
		    border: none;
		}
		.ant-menu-item:hover, .ant-menu-submenu-title:hover {
		    background: $listHoverBgColor;
		}
		.ant-select.error:not(.ant-select-disabled) .ant-select-selector,
		.ant-select.error:not(.ant-select-disabled):hover .ant-select-selector,
		.ant-input-password.error,
		.ant-input-password.error:hover,
		.ant-input-password.error:focus,
		.ant-input.error,
		.ant-input.error:hover,
		.ant-input.error:focus {
		    border-color: $errorColor;

		}

		.ant-popover,
		.ant-popover .ant-popover-inner,
		.ant-btn:hover,
		.ant-btn:focus,
		.ant-btn:active,
		.ant-btn.active,
		.ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
		.ant-menu.ant-menu-dark,
		.ant-modal-content,
		.ant-modal-header {
		    background: transparent;
		}

		.ant-select-item-option-selected:not(.ant-select-item-option-disabled),
		.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
		    background: $listHoverBgColor;
		    color: $fontColor;
		}

		.ant-select-selection-placeholder {
		    opacity: .7;
		}

		.ant-modal-header {
		    border-bottom-color: $borderColor;
		}

		.ant-modal-footer {
		    border-top-color: $borderColor;
		}

		a,
		.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis, 
		.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis,
		.ant-menu,
		.ant-popover-inner-content,
		.ant-dropdown-menu-item,
		.ant-dropdown-menu-submenu-title,
		.ant-dropdown-menu-item>a,
		.ant-dropdown-menu-submenu-title>a,
		.ant-pagination-options-quick-jumper input,
		.ant-input-password-icon,
		.ant-empty-description,
		.ant-modal-title,
		.ant-modal-close-x,
		.ant-select-item,
		.ant-select-multiple .ant-select-selector,
		.ant-select-multiple .ant-select-selection-item-remove,
		.ant-message-notice-content,
		.ant-btn,
		.ant-input {
		    color: $fontColor;
		}

		.ant-btn-primary {
		    color: $normalBlue;
		}

		.ant-dropdown-menu-item:hover,
		.ant-dropdown-menu-submenu-title:hover {
		    background: $listHoverBgColor;
		}

		.ant-dropdown-menu-item>a:hover,
		.ant-dropdown-menu-submenu-title>a:hover {
		    color: $fontColor;
		}

		.ant-input-password-icon:hover,
		.ant-select-multiple .ant-select-selection-item-remove:hover {
		    color: $hoverWhiteColor;
		}

		.ant-popover .ant-popover-content {
		    background: #000;
		}

		.ant-popover-placement-topLeft>.ant-popover-content>.ant-popover-arrow {
		    border-right-color: #000;
		    border-bottom-color: #000;
		    box-shadow: 3px 3px 7px rgba(255, 255, 255, 0.1);
		}

		.ant-popover .ant-popover-inner {
		    box-shadow: getSmallShadow($shadowColor);
		}
		.ant-dropdown-menu,
		.ant-message-notice-content,
		.ant-select-dropdown {
		    background: $modalBgColor;
		    border-color: $borderColor;
		    box-shadow: getSmallShadow($shadowColor);
		}

		.ant-btn,
		.ant-select-multiple .ant-select-selector,
		.ant-select-multiple .ant-select-selection-item,
		.ant-input {
		    background: transparent;
		    border-color: $borderColor;
		}

		.ant-modal-content {
		    background: $modalBgColor;
		    color: $fontColor;
		    box-shadow: getBigShadow($shadowColor);
		    animation: box 1s linear infinite;
		    border-radius: 4px;
		}

		.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
		    color: $fontColor;
		    border-color: $borderColor;
		}

		.ant-tooltip-content,

		.ant-pagination-options-quick-jumper input,
		.ant-input-affix-wrapper {
		    background: transparent;
		    border-color: $borderColor;
		}

		.ant-tooltip-content {
		    box-shadow: getSmallShadow($shadowColor);
		}

		.ant-btn-link {
		    color: $normalBlue;
		    background-color: transparent;
		    border-color: transparent;
		    box-shadow: none;
		}

		.ant-spin-container::after {
		    background: transparent;
		}

		.ant-btn-primary {
		    color: $fontColor;
		    background-color: $normalBlue;
		    border-color: $normalBlue;
		}

		.ant-btn-primary:hover,
		.ant-btn-primary:focus {
		    color: $fontColor;
		    background-color: $hoverBlue;
		    border-color: $hoverBlue
		}

		.ant-dropdown-menu-item>a:hover,
		.ant-dropdown-menu-submenu-title>a:hover {
		    color: $normalBlue;
		}

		.ant-dropdown-menu-item>.link-a,
		.ant-dropdown-menu-submenu-title>.link-a {
		    display: block;
		}

		.ant-btn-link[disabled],
		.ant-btn-link[disabled]:hover {
		    color: rgba(255, 255, 255, .25)
		}

		.ant-btn-primary-disabled,
		.ant-btn-primary.disabled,
		.ant-btn-primary[disabled],
		.ant-btn-primary-disabled:hover,
		.ant-btn-primary.disabled:hover,
		.ant-btn-primary[disabled]:hover,
		.ant-btn-primary-disabled:focus,
		.ant-btn-primary.disabled:focus,
		.ant-btn-primary[disabled]:focus,
		.ant-btn-primary-disabled:active,
		.ant-btn-primary.disabled:active,
		.ant-btn-primary[disabled]:active,
		.ant-btn-primary-disabled.active,
		.ant-btn-primary.disabled.active,
		.ant-btn-primary[disabled].active {
			color: rgba(255, 255, 255, .25);
			border-color: $disableBlue;
			background-color: $disableBlue;
		}
		.ant-popover-inner-content {
			font-size: 12px;
			padding: 8px 12px;
		}
		@keyframes box {
		    from {
		        box-shadow: getBigShadow($shadowColor);
		    }

		    50% {
		        box-shadow: 0 0 94px 10px $shadowColor;
		    }

		    to {
		        box-shadow: getBigShadow($shadowColor);
		    }
		}
		.ant-pagination {
		    color: $fontColor;
		    margin-top: 1rem;
		    .ant-pagination-item-link {
		        color: $fontColor;
		    }
		    .ant-pagination-prev,
		    .ant-pagination-next {
		        background: transparent;
		    }
		    .ant-pagination-disabled a {
		        color: rgba(255, 255, 255, .6);
		    }
		    .ant-pagination-item a {
		        color: $fontColor;
		    }
		    .ant-pagination-item-active {
		        background: transparent;
		        border-color: transparent;
		        a {
		            color: #1890ff;
		        }
		    }
		}
		.ant-pagination-disabled a, 
		.ant-pagination-disabled:hover a, 
		.ant-pagination-disabled:focus a, 
		.ant-pagination-disabled .ant-pagination-item-link, 
		.ant-pagination-disabled:hover .ant-pagination-item-link, 
		.ant-pagination-disabled:focus .ant-pagination-item-link {
		    color: rgba(255, 255, 255, .25);
		}
		.container {
		    padding-top: $headerHeight + 10px;
		    color: $fontColor;
		}

		.max-container {
		    width: 1000px;
		}
		.align-right {
		    text-align: right;
		}
		.link-a {
		    cursor: pointer;
		    color: $fontColor;
		}

		.link-to {
		    text-decoration: underline;
		}
		.link-to:hover {
		    text-decoration: underline;
		}

		.link-a:hover {
		    color: $normalBlue;
		}
		.bf-content {
		    color: $fontColor;
		    font-size: 14px;
		    border: 1px solid $borderColor;
		}
		.error {
		    .bf-content {
		        border-color: $errorColor;   
		    }
		}
		.hidden {
		    display: none;
		}
		.normal-edit.bf-container {
		    .bf-content {
		        height: 110px;
		    }
		}
		.small-edit.bf-container {
		    .bf-content {
		        height: 60px;
		    }
		    .public-DraftEditor-content {
		        padding: 10px 5px;
		    }
		}
		.link-btn {
		    cursor: pointer;
		    color: $normalBlue;
		}

		.reply-edit-container {
		    .bf-controlbar {
		        padding: 0;
		        position: absolute;
		        bottom: -36px;
		        right: 60px;
		        .control-item {
		            margin: 0;
		        }
		        .control-item:not(:last-child) {
		            margin-right: 3px;
		        }
		    }
		    .reply-btn {
		        float: right;
		    }
		}
		.cropper-modal {
		    opacity: .2;
		}

		.bofore-commit-tip {
		    color: #ccc;
		}

		.title {
		    color: $titleFontColor;
		    font-size: $titleFontSize;
		}
		.underline {
		    text-decoration: underline;
		}
		.underline:hover {
		    text-decoration: underline;
		}
		.color-blue {
		    color: $normalBlue;
		}


  `

export default css