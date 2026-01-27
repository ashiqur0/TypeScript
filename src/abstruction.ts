// Abstraction: This module defines abstract classes and interfaces for the application.

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing music...");
    }
    pause(): void {
        console.log("Pausing music...");
    }
    stop(): void {
        console.log("Stopping music...");
    }
}

const myMusicPlayer = new MusicPlayer();
myMusicPlayer.play();
myMusicPlayer.pause();
myMusicPlayer.stop();