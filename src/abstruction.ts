// Abstraction: This module defines abstract classes and interfaces for the application.

// Way1: using interface
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
// myMusicPlayer.play();
// myMusicPlayer.pause();
// myMusicPlayer.stop();


// Way2: using abstract class
abstract class MediaPlayer2 {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer2 extends MediaPlayer2 {
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

const myMusicPlayer2 = new MusicPlayer();
myMusicPlayer2.play();
myMusicPlayer2.pause();
myMusicPlayer2.stop();