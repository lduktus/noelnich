<script lang="ts">
	import { onMount } from 'svelte';
	import { trackList } from '$lib/data/trackList';

	let trackIndex = 0;
	let playbackVolume = 50;
	let currentTrack;
	let currentImage;
	let currentName;

	let pauseIcon = './img/buttons/ButtonPause.svg';
	let playIcon = './img/buttons/ButtonPlay.svg';

	let playpauseIcon = playIcon;

	// load current track
	const loadTrack = () => {
		currentImage = trackList[trackIndex].image;
		currentName = trackList[trackIndex].name;
		currentTrack = new Audio(trackList[trackIndex].path);
	};

	// toggle play/pause
	const playPauseTack = () => {
		if (currentTrack.paused) {
			currentTrack.play();
			playpauseIcon = pauseIcon;
		} else {
			currentTrack.pause();
			playpauseIcon = playIcon;
		}
	};

	// next track
	const nextTrack = () => {
		if (trackIndex < trackList.length - 1) {
			trackIndex += 1;
		} else {
			trackIndex = 0;
		}
		if (!currentTrack.paused) {
			currentTrack.pause();
			loadTrack();
			currentTrack.play();
		} else {
			loadTrack();
		}
	};

	// previous track
	const prevTrack = () => {
		if (trackIndex == 0) {
			trackIndex = trackList.length - 1;
		} else {
			trackIndex -= 1;
		}
		if (!currentTrack.paused) {
			currentTrack.pause();
			loadTrack();
			currentTrack.play();
		} else {
			loadTrack();
		}
	};

	// adjust volume
	const adjustVolume = () => (currentTrack.volume = playbackVolume / 100);

	// load track when loading page in browser
	onMount(() => {
		loadTrack();
	});
</script>

<!-- <div class="player-container bold_border"> -->
<div class="img-wrapper" style="background-image: url({currentImage})" />
<div class="player_buttons w-full">
	<button class="player_button salient_border shadow-brutalist">
		<img
			class="button-icon"
			src="./img/buttons/ButtonPrev.svg"
			alt="Previous"
			on:click={prevTrack}
		/>
	</button>
	<button class="player_button salient_border shadow-brutalist">
		<img class="button-icon" src={playpauseIcon} alt="Play or Pause" on:click={playPauseTack} />
	</button>
	<button class="player_button salient_border shadow-brutalist">
		<img class="button-icon" src="./img/buttons/ButtonNext.svg" alt="Next" on:click={nextTrack} />
	</button>
</div>
<!-- </div> -->
