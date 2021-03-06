const css = `
	    $orb: orb;
		$errorColor: #F55;
		$borderColor: rgb(96, 100, 109);
		$shadowColor: #95c3e8;
		$shadowDarkColor: #484545;
		$fontColor: #fff;
		$titleFontColor: rgba(255, 255, 255, .7);
		$titleFontSize: 16px;
		$hoverHighlightColor: #40a9ff;
		$headerHeight: 52px;
		$normalBlue: #1890ff;
		$disableBlue: rgba(112, 165, 214, 0.7);
		$hoverBlue: #40a9ff;
		$modalBgColor: rgba(5, 6, 8, .85);

		$hoverWhiteColor: rgba(255, 255, 255, .7);
		$listHoverBgColor: rgba(64, 169, 255, 0.28);
		$listActiveBgColor: rgba(64, 169, 255, 0.5);

		@function getSmallShadow ($color) {
			@return 0 0 11px 0 $color;
		}
		@function getMiddleShadow ($color) {
			@return 0 0 34px 0 $color;
		}
		@function getBigShadow ($color) {
			@return 0 0 94px 0 $color;
		}

		@keyframes orb {
		  from {
		    transform:rotate(0deg)
		  }
		  to{
		    transform:rotate(-360deg)
		  }
		}

  `

export default css