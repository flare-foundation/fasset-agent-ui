default:
  just --list

release:
  releaser release --config ./release_config.yaml

release-fast:
  releaser release --config ./release_config.yaml --fast
