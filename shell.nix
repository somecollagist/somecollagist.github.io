{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    dart-sass
    texliveFull
  ];

  shellHook = ''
    npm i
  '';
}